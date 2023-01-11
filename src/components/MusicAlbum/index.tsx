import Image from "next/image";

interface IProps {
  url: string;
  albumName: string;
  genre: {
    name: string;
    id: string;
  };
  bandName: string;
}

const MusicAlbum: React.FC<IProps> = ({ albumName, bandName, genre, url }) => {
  if(!albumName) return (
    <h1>Sem albuns</h1>
  )

  return (
    <div className="border rounded-lg p-5 w-64">
      <span className="border cursor-default px-2 rounded text-sm">{genre?.name}</span>
      <img src={url} alt="Album Image" className="mt-3" />
      <h1 className="h1 mt-4 leading-3">{albumName}</h1>
      <p className="text-xs mt-1">{bandName}</p>
    </div>
  );
};

export default MusicAlbum;
