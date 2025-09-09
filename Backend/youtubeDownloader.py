from pytubefix import YouTube
from Global import GlobalImportes
import subprocess
from dbService import DROP_ALL,Create_All


GlobalImportes.FormatoUTF()

Create_All()

def DownloadMusic(url):
    yt = YouTube(url)

    try:
        audio_stream = yt.streams.filter(only_audio=True).first()
        audio_stream.download(filename=yt.title+".mp3",output_path=GlobalImportes.Create_download_Folder)
        subprocess.run(fr'start cmd cd {GlobalImportes.Create_download_Folder} & explorer .',shell=True,creationflags=0x08000000)
        print("Baixou com Sucesso")
    except UnicodeEncodeError as e:
        print(e)