Presentation Website
==============


Installation Steps
------

* Create virtualenv
* Activate virtualenv
* Run `pip install nodeenv`
* Run `nodeenv --node=0.12.7 -p`
* Clone project
* Checkout dev branch
* Create your branch (topics/feature)
* Run `npm install`
* Run `bower install`
* Run `gulp build`
* Run `gulp sprites`
* Run `npm run dev`
* Run `gulp watch` (another tab)
* Run `compass watch` (another tab)

Notes
------

* HTML and JS editable files are in **src** folder
* SASS files are in **compass_components**
* To improve speed when generating sprites, install oily (gem install oily_png) (http://compass-style.org/help/tutorials/spriting/)
