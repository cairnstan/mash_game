angular.module('mashApp').controller('HomeController', function(CategoryService, $location){
  var home = this;

  home.rules = "M.A.S.H. is a future imagining game. First you will choose your categories. Then you will enter items for each category. A magic number will be chosen to cycle through all the items, crossing off the element whenever it gets to the magic number. This continues until there is only one item left in each category. These elements combined will be your story."
  home.workingCategories = {};

  home.enterInputs = function(){
    CategoryService.getInputs(home.workingCategories.categories);
    if(CategoryService.bestArray.length == 0){
      alert('You have not chosen any categories.\nPlease select at least one category for game play.')
    }else{
      console.log('This is the array from the factory', CategoryService.bestArray);
      CategoryService.findCategory();
      $location.path('/gameInputs');
  }

  }

});
