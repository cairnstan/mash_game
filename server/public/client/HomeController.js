
app.controller('HomeController', function(CategoryService){
  var home = this;

  home.rules = "M.A.S.H. is a future imagining game. First you will choose your categories. Then you will enter items for each category. A magic number will be chosen to cycle through all the items, crossing off the element whenever it gets to the magic number. This continues until there is only one item left in each category. These elements combined will be your story."

  // home.category = CategoryService.category;

  home.enterInputs = function(){
    console.log('This is the superpower:', home.superpower);
    console.log();
    var initialCategories = [home.superpower];
    // var initialCategories = [home.superpower, home.pet, home.love, home.job,
    //   home.biography, home.live, home.ride, home.adventure, home.movie, home.campaign];
    //   console.log('these are the initialCategories:', initialCategories);
    //
    // console.log('THis is the superpower value:', home.superpower.val);
    // console.log('You are calling enterInputs');
  //  CategoryService.getInputs(initialCategories);
}
  // home.category = '';
  // home.categories = [];
  // //home.initialCategories = [home.pet, home.love, home.job];
  //
  // home.pet = {name: 'pet'};
  // home.love = {name: 'love'};
  // home.job = {name: 'job'};
  // home.biography = {name: 'biography'};
  // home.superpower = {name: 'superpower'};
  // home.live = {name: 'live'};
  // home.ride = {name: 'ride'};
  // home.adventure = {name: 'adventure'};
  // home.movie = {name: 'movie'};
  // home.campaign = {name: 'campaign'};




  // home.enterInputs = function(){
  //
  // home.initialCategories.push(home.pet);
  // home.initialCategories.push(home.job);
  // home.initialCategories.push(home.love);
  // home.initialCategories.push(home.biography);
  // home.initialCategories.push(home.superpower);
  // home.initialCategories.push(home.live);
  // home.initialCategories.push(home.ride);
  // home.initialCategories.push(home.adventure);
  // home.initialCategories.push(home.movie);
  // home.initialCategories.push(home.campaign);
  //
  // // console.log('initialCategories', home.initialCategories);
  // home.categories = home.initialCategories.filter(function(category){
  //   if(category.val == true){
  //     return true;
  //   }else {
  //     return false;
  //   }
  // })
  // // console.log(home.category);
  //   console.log(home.categories);
  //   console.log('Your categories have been selected!');
  //   $http.post('/categories', home.categories).then(function(){
  //     console.log('categories have been posted', home.categories);
  //   })
  // }
});
