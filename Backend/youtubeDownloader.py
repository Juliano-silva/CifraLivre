from pytubefix import YouTube
from Global import GlobalImportes
import subprocess

GlobalImportes.FormatoUTF()

def DownloadMusic(url):
    yt = YouTube(url)

    print(yt.title)

    CREATE_NO_WINDOW = 0x08000000  
    try:
        audio_stream = yt.streams.filter(only_audio=True).first()
        audio_stream.download(filename=yt.title+".mp3",output_path=GlobalImportes.Create_download_Folder)
        subprocess.run(fr'start cmd cd {GlobalImportes.Create_download_Folder} & explorer .',shell=True,creationflags=CREATE_NO_WINDOW)
        print("Baixou com Sucesso")
    except UnicodeEncodeError as e:
        print(e)


DownloadMusic("https://music.youtube.com/watch?v=JK_hBk2f01k&list=RDAMVMvdRLRdlvKOs")