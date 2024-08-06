/**
 * @interface
 */
class Trans_Api_Package {
    /**
     * @return {{length: number, width: number, height: number}}
     */
    getSize() {
        throw new Error('Please implement this method.');
    }

    /**
     * @return {number}
     */
    getWeight() {
        throw new Error('Please implement this method.');
    }
}