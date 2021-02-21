/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (r) => {
    // Write your code here
    let stars = '';

    for (let i = 1; i <= r; i++) {
        for (let j = 1; j <= (r - i); j++) {
            stars += " ";
        }
        for (let k = 1; k <= i; k++) {
            stars += " *";
        }
        stars += "  \n";
    }

    return stars;

};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
