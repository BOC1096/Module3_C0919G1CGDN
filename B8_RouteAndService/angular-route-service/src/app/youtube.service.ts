import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  playlist = [
    { id: 'CX11yw6YL1w', song: 'Céline Dion - Ashes (from the Deadpool 2 Motion Picture Soundtrack)' },
    { id: 'HBYirj2c_jw', song: 'Deadpool 2 - Take on Me' },
    { id: 'N6O2ncUKvlg', song: 'Nelly - Just A Dream' },
    { id: 'uelHwf8o7_U', song: 'Eminem - Love The Way You Lie ft. Rihanna' },
    { id: 'WpYeekQkAdc', song: 'The Black Eyed Peas - Where Is The Love?' },
    {
      id: 'kY3NAgz4ie0', song: 'Mỹ Nhân Remix Khó Vẽ Nụ Cười Remix Mỹ Nhân EDM EDM Htrol Remix | Nhạc EDM Tik Tok Gây Nghiện'
    }
  ];
  constructor() { }
  find(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
