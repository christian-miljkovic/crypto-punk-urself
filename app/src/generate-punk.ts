import mergeImages from 'merge-images'

interface PunkCodes {
  accessoryCode?: number
  beardCode?: number
  earsCode: number
  eyesCode: number
  faceCode: number
  hairCode?: number
  mouthCode: number
  noseCode: number
}

export async function generatePunk({
  accessoryCode = 0,
  beardCode = 0,
  earsCode,
  eyesCode,
  faceCode,
  hairCode,
  mouthCode,
  noseCode,
}: PunkCodes): Promise<string> {
  return await mergeImages([
    `./assets/accessory/access${accessoryCode}.png`,
    `./assets/beard/beard${beardCode}.png`,
    `./assets/ears/ears${earsCode}.png`,
    `./assets/eyes/eyes${eyesCode}.png`,
    `./assets/face/face${faceCode}.png`,
    `./assets/hair/hair${hairCode}.png`,
    `./assets/mouth/mouth${mouthCode}.png`,
    `./assets/nose/nose${noseCode}.png`,
  ])
}
