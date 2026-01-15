/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime)
{
  if(remainingTime===undefined)
    return 'You forgot to set the timer.'
  if(remainingTime)
    return 'Not done, please wait.';    
  else
    return 'Lasagna is done.';
}

export function preparationTime(layers,avgTime)
{
  if(avgTime===undefined)
    return layers.length*2;
  else
    return layers.length*avgTime;
}

export function quantities(layers)
{
  let quantity = {noodles:0,sauce:0};
  for(let meal in layers)
    {
      if(layers[meal]==="noodles")
        quantity.noodles+=50;
      if(layers[meal]==="sauce")
        quantity.sauce+=0.2;
    }

  return quantity;
}

export function addSecretIngredient(friendsList,myList)
{
  myList.push(friendsList[friendsList.length-1]);
}

export function scaleRecipe(recipe,portions)
{
  let scaledRecipe = {}
  for(let key in recipe)
    {
      scaledRecipe[key]=(recipe[key]/2)*portions;
    }
  return scaledRecipe;
}

