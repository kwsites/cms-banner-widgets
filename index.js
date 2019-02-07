const _ = require('lodash');

module.exports = {
   extend: 'apostrophe-widgets',
   label: 'Banner Widget',

   addFields: [
      {
         type: 'select',
         name: 'layout',
         choices: [
            {
               value: 'promo',
               label: 'Promo (two images + text)',
               showFields: ['text'],
            },

            {
               value: 'page',
               label: 'Page / Piece Header (two images + derived text)'
            },
         ],
      },

      {
         name: 'text',
         type: 'singleton',
         label: 'Banner Text',
         widgetType: 'apostrophe-rich-text',
      },

      {
         name: 'images',
         type: 'singleton',
         widgetType: 'apostrophe-images',
         options: {
            minSize: [ 200, 200 ],
            aspectRatio: [370, 530],
            focalPoint: true
         }
      },
   ],

   construct (self, options) {

      self.pushAssets = _.wrap(self.pushAssets, (pushAssets) => {
         self.pushAsset('stylesheet', 'always', { when: 'always' });
         pushAssets();
      });

   }

};
