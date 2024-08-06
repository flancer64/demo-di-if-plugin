/**
 * @interface
 */
class Trans_Api_Route {
    /**
     * @return {string}
     */
    getPlaceFrom() {
        throw new Error('Please implement this method.');
    }

    /**
     * @return {string}
     */
    getPlaceTo() {
        throw new Error('Please implement this method.');
    }

}