/******************
 * YOUR CODE HERE *
 ******************/

function triple(num){

return num*3
}

const tripleAll=function(nums){

return nums.map(triple)
}

const getNegativeValue= function(num){

if (num>0){ return num * -1
}
if (num<0){
  return num
}
if (num===0){
  return num
}
}

const negativeValues = function(nums){

  return nums.map(getNegativeValue)
}

const makeQuestion = function (str){

return str + '?'  
}

const questionings = function(str){

  return str.map(makeQuestion)
}

const getInitials = function(str1,str2){

  return str1.slice(1) + str2.slice(1)
}

const changeToInitials = function (str1,str2){

return str1,str2.map(getInitials)
}

const doubleIfEven =function(nums){

  if (nums%2 === 0){

return nums*2
}

if (nums%2 !== 0){
return nums
}
}

const doubleEven = function(nums){

  return nums.map(doubleIfEven)
}





/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
