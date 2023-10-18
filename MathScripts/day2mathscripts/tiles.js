var roomLength = 20
var roomWidth = 9

var numberOfTileBoxesForRoom = (roomLength * roomWidth) / 12
var numberOfExtraBoxes = 10 * numberOfTileBoxesForRoom / 100

console.log ("I'll need " + Math.round(numberOfTileBoxesForRoom) + " boxes to tile the entire room, but I'll buy " + Math.round(numberOfExtraBoxes) + " more in case of messups.")