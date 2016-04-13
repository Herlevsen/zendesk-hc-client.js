(function($) {

    /**
     * Zendesk Help Center API Client
     * Only intended for querying publicly available data from Zendesk Help Center Api
     * 
     * @param {string} subdomain    The subdomain for the site, eg: 'mysite' if your help center is located at mysite.zendesk.com
     * @param {string} locale       The localization code - Optional
     * @constructor
     */
    window.ZendeskClient = function(subdomain, locale) {
        this.subdomain = subdomain;
        this.locale    = locale;
    };

    ZendeskClient.prototype = {
        zApi: '.zendesk.com/api/v2/help_center/',

        /**
         * Helper method for constructing the url
         * Should not be called by consumer
         * 
         * @param  {string} resource        The resource to query, eg: categories
         * @param  {resourceId} resourceId  Id of the resource, eg: 200348742 - optional
         * @param  {subject} subject        Id of subject, eg: sections - optional
         * @return {string}                 A string in the format: http://mysite.zendesk.com/api/v2/help_center/categories.json
         */
        makeUrl: function(resource, resourceId, subject) {
            var locale = '';

            if(typeof this.locale !== 'undefined') {
                locale = this.locale + '/';
            }

            if(typeof resourceId !== 'undefined' && typeof subject !== 'undefined') {
                return 'http://' + this.subdomain + this.zApi + locale + resource + '/' + resourceId + '/' + subject + '.json';
            }

            return 'http://' + this.subdomain + this.zApi + locale + resource + '.json';
        },

        /**
         * Get all categories
         * 
         * @param  {Function} callback      Callback function to call when the response has been received
         * @return {void}
         */
        getCategories: function(callback) {
            $.getJSON(this.makeUrl('categories'), callback);
        },

        /**
         * Get all sections
         * 
         * @param  {Function} callback      Callback function to call when the response has been received
         * @return {void}
         */
        getSections: function(callback) {
            $.getJSON(this.makeUrl('sections'), callback);
        },

        /**
         * Get all sections within a specific category
         *
         * @param  {number}   categoryId    Id of the category
         * @param  {Function} callback      Callback function to call when the response has been received
         * @return {void}
         */
        getSectionsByCategoryId: function(categoryId, callback) {
            $.getJSON(this.makeUrl('categories', categoryId, 'sections'), callback);
        },

        /**
         * Get all articles
         * 
         * @param  {Function} callback      Callback function to call when the response has been received
         * @return {void}
         */
        getArticles: function(callback) {
            $.getJSON(this.makeUrl('articles'), callback);
        },

        /**
         * Get all articles within a specific category
         *
         * @param  {number}   categoryId    categoryId Id of the category
         * @param  {Function} callback      Callback function to call when the response has been received
         * @return {void}
         */
        getArticlesByCategoryId: function(categoryId, callback) {
            $.getJSON(this.makeUrl('categories', categoryId, 'articles'), callback);
        },

        /**
         * Get all articles in a specific category
         *
         * @param  {number}   sectionId     Id of the section
         * @param  {Function} callback      Callback function to call when the response has been received
         * @return {void}
         */
        getArticlesBySectionId: function(sectionId, callback) {
            $.getJSON(this.makeUrl('sections', sectionId, 'articles'), callback);
        }
    };
})(jQuery);
