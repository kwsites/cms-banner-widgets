apos.define('@kwsites/cms-banner-widgets-editor', {

   extend: 'apostrophe-widgets-editor',

   construct: function (self, options) {

      self.beforeShow = _.wrap(self.beforeShow, function (beforeShow, callback) {

         var templateConfiguredFieldData = _.get(options, 'templateOptions', {});

         _.assign(self.data, templateConfiguredFieldData);
         _.each(_.keys(templateConfiguredFieldData), function (key) {
            self.$el.find('.apos-field[data-name="' + key + '"] :input').prop('disabled', true);
         });

         return beforeShow(callback);
      });


   }

});
