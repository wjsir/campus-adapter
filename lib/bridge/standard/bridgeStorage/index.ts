export interface Album {
  saveImage(base64Img: string): Promise<boolean>;
}

export interface BridgeStorage {
  getAlbum(): Album;
}
