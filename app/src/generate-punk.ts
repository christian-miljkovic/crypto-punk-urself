import mergeImages from 'merge-images'

export interface PunkCodes {
  [key: string]: any
  accessory?: number
  beard?: number
  ears: number
  eyes: number
  face: number
  hair?: number
  mouth: number
  nose: number
}

export async function generatePunk({
  accessory = 0,
  beard = 0,
  ears,
  eyes,
  face,
  hair,
  mouth,
  nose,
}: PunkCodes): Promise<string> {
  // Order matters because the images get layered on
  return await mergeImages([
    `./assets/face/face${face}.png`,
    `./assets/beard/beard${beard}.png`,
    `./assets/hair/hair${hair}.png`,
    `./assets/ears/ears${ears}.png`,
    `./assets/eyes/eyes${eyes}.png`,
    `./assets/mouth/mouth${mouth}.png`,
    `./assets/nose/nose${nose}.png`,
    `./assets/accessory/access${accessory}.png`,
  ])
}
