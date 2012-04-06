/**
 * @class Ext.draw.Matrix
 * @private
 * Utility class to calculate [affine transformation](http://en.wikipedia.org/wiki/Affine_transformation) matrix.
 *
 */
Ext.define('Ext.draw.Matrix', {

    /**
     * Create an affine transform matrix.
     *
     * @param xx Coefficient from x to x
     * @param xy Coefficient from x to y
     * @param yx Coefficient from y to x
     * @param yy Coefficient from y to y
     * @param dx Offset of x
     * @param dy Offset of y
     */
    constructor: function (xx, xy, yx, yy, dx, dy) {
        if (xx !== undefined) {
            this.matrix = [[xx, yx, dx],  [xy, yy, dy], [0, 0, 1]];
        } else {
            this.matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
        }
    },

    /**
     * Postpend a matrix onto the current.
     * Note: The resulting transform will be first do the given transform,
     * then the current one.
     *
     * @param xx Coefficient from x to x
     * @param xy Coefficient from x to y
     * @param yx Coefficient from y to x
     * @param yy Coefficient from y to y
     * @param dx Offset of x
     * @param dy Offset of y
     * @returns this
     */
    add: function (xx, xy, yx, yy, dx, dy) {
        var me = this, out = [[], [], []], 
            matrix = [[xx, yx, dx], [xy, yy, dy], [0, 0, 1]], 
            x, y, z, res;

        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                res = 0;
                for (z = 0; z < 3; z++) {
                    res += me.matrix[x][z] * matrix[z][y];
                }
                out[x][y] = res;
            }
        }
        me.matrix = out;
        return me;
    },

    /**
     * Prepend a matrix onto the current.
     * Note: The resulting transform will be first do the current transform,
     * then the given one.
     *
     * @param xx Coefficient from x to x
     * @param xy Coefficient from x to y
     * @param yx Coefficient from y to x
     * @param yy Coefficient from y to y
     * @param dx Offset of x
     * @param dy Offset of y
     * @returns this
     */
    prepend: function (xx, xy, yx, yy, dx, dy) {
        var me = this, out = [[], [], []],
            matrix = [[xx, yx, dx], [xy, yy, dy], [0, 0, 1]],
            x, y, z, res;

        for (x = 0; x < 3; x++) {
            for (y = 0; y < 3; y++) {
                res = 0;
                for (z = 0; z < 3; z++) {
                    res += matrix[x][z] * me.matrix[z][y];
                }
                out[x][y] = res;
            }
        }
        me.matrix = out;
        return me;
    },

    /**
     * Return a new matrix represents the opposite transformation of the current one.
     *
     * @return {Ext.draw.Matrix}
     */
    invert: function () {
        var matrix = this.matrix, a = matrix[0][0], b = matrix[1][0], c = matrix[0][1], d = matrix[1][1], e = matrix[0][2], f = matrix[1][2], x = 1 / (a * d - b * c);
        return new Ext.draw.Matrix(d * x, -b * x, -c * x, a * x, (c * f - d * e) * x, (b * e - a * f) * x);
    },

    clone: function () {
        var matrix = this.matrix;
        return new Ext.draw.Matrix(matrix[0][0], matrix[1][0], matrix[0][1], matrix[1][1], matrix[0][2], matrix[1][2]);
    },

    translate: function (x, y) {
        this.prepend(1, 0, 0, 1, x, y);
        return this;
    },

    scale: function (x, y, cx, cy) {
        var me = this;
        if (y === null) {
            y = x;
        }
        me.add(1, 0, 0, 1, cx, cy);
        me.add(x, 0, 0, y, 0, 0);
        me.add(1, 0, 0, 1, -cx, -cy);
        return me;
    },

    rotate: function (a, x, y) {
        a = Ext.draw.Draw.rad(a);
        var me = this, cos = +Math.cos(a).toFixed(9), sin = +Math.sin(a).toFixed(9);
        me.add(cos, sin, -sin, cos, x, y);
        me.add(1, 0, 0, 1, -x, -y);
        return me;
    },

    x: function (x, y) {
        var matrix = this.matrix;
        return x * matrix[0][0] + y * matrix[0][1] + matrix[0][2];
    },

    y: function (x, y) {
        var matrix = this.matrix;
        return x * matrix[1][0] + y * matrix[1][1] + matrix[1][2];
    },

    get: function (i, j) {
        return +this.matrix[i][j].toFixed(4);
    },

    /**
     * Determines whether this matrix is an identity matrix (no transform)
     * @return {Boolean}
     */
    isIdentity: function () {
        var mat = this.matrix;
        return mat[0][0] === 1 && mat[0][1] === 0 && mat[0][2] === 0 && mat[1][0] === 1 && mat[1][1] === 0 && mat[1][2] === 0 && mat[1][1] === 0 && mat[1][2] === 0;
    },

    /**
     * Determines if this matrix has the same values as another matrix
     * @param {Ext.draw.Matrix} matrix
     * @return {Boolean}
     */
    equals: function (matrix) {
        var thisMatrix = this.matrix, otherMatrix = matrix.matrix;
        return thisMatrix[0][0] === otherMatrix[0][0] && thisMatrix[0][1] === otherMatrix[0][1] && thisMatrix[0][2] === otherMatrix[0][2] && thisMatrix[1][0] === otherMatrix[1][0] && thisMatrix[1][1] === otherMatrix[1][1] && thisMatrix[1][2] === otherMatrix[1][2];
    },

    toString: function () {
        var me = this;
        return [me.get(0, 0), me.get(0, 1), me.get(1, 0), me.get(1, 1), 0, 0].join(',');
    },

    toCanvas: function (ctx) {
        var matrix = this.matrix;
        ctx.transform(matrix[0][0], matrix[1][0], matrix[0][1], matrix[1][1], matrix[0][2], matrix[1][2]);
    },

    toSvg: function () {
        var matrix = this.matrix;
        return "matrix(" + [matrix[0][0], matrix[1][0], matrix[0][1], matrix[1][1], matrix[0][2], matrix[1][2]].join(',') + ")";
    },

    offset: function () {
        var matrix = this.matrix;
        return [matrix[0][2].toFixed(4), matrix[1][2].toFixed(4)];
    },

    /**
     * Split matrix into Translate Scale, Shear, and Rotate
     */
    split: function () {
        function norm (a) {
            return a[0] * a[0] + a[1] * a[1];
        }

        function normalize (a) {
            var mag = Math.sqrt(norm(a));
            a[0] /= mag;
            a[1] /= mag;
        }

        var matrix = this.matrix, out = {
            translateX: matrix[0][2],
            translateY: matrix[1][2]
        }, row;

        // scale and shear
        row = [
            [matrix[0][0], matrix[0][1]],
            [matrix[1][1], matrix[1][1]]
        ];
        out.scaleX = Math.sqrt(norm(row[0]));
        normalize(row[0]);

        out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
        row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

        out.scaleY = Math.sqrt(norm(row[1]));
        normalize(row[1]);
        out.shear /= out.scaleY;

        // rotation
        out.rotate = Math.asin(-row[0][1]);

        out.isSimple = !+out.shear.toFixed(9) && (out.scaleX.toFixed(9) == out.scaleY.toFixed(9) || !out.rotate);

        return out;
    }
});
