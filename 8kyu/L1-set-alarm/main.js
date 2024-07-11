function setAlarm(employed, vacation){
  if (employed === true && vacation === true){
    return false;
} else if ((employed === true) && (vacation === false)){
    return true
} else {
    return false}

}