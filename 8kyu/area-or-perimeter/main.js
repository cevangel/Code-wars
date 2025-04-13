function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] === "r"|| name[0] === "R") {//need to do name[0] === "R" also insead of "r" ||"R"
   return (name + " plays banjo")
  } else  {
   return (name + " does not play banjo")
  }
}