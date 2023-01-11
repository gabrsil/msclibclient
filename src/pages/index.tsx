import { gql } from "graphql-request";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next/types";
import MusicAlbum from "../components/MusicAlbum";
import client from "../graphql/client";
import styles from "../styles/Home.module.css";

const query = gql`
  query GetAlbumById($input: GetAlbumByIdPayload!) {
    getAlbumById(input: $input) {
      album {
        artist {
          name
          genre {
            name
            id
          }
        }
        id
        name
        imgUrl
        releaseDate
      }
    }
  }
`;

export const getServerSideProps: GetStaticProps = async () => {
  // const data = await client.request(query, {
  //   input: {
  //     id: "7c06fe54-d4e7-48b6-a9a9-c7938301b2a8",
  //   },
  // });

  return {
    props: {},
  };
};

const list = [
  {
    name: "Lucas Alves",
    albums: [
      {
        albumName: "Temple of Shadows",
        albumImg:
          "https://upload.wikimedia.org/wikipedia/pt/0/05/TempleOfShadowsAngra.jpg",
      },
      {
        albumName: "Roots Bloody Roots",
        albumImg:
          "https://upload.wikimedia.org/wikipedia/pt/6/6b/Roots1996.jpg",
      },
      {
        albumName: "Symbolic",
        albumImg:
          "https://upload.wikimedia.org/wikipedia/en/e/e3/Symbolic_Album.jpg",
      },
    ],
  },
];

export default function Home(props: any) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="bg-neutral-900 h-12"></div>
      </header>
      <div className="w-full bg-gray-50 grid grid-cols-[1fr_2fr_1fr]">
        <aside>a</aside>
        <main className="min-h-screen m-0 p-0">
          <section className="w-full m-auto h-screen border py-8 px-12">
            <div className="flex flex-col">
              {list.map((item) => (
                <div className="text-lg my-3 flex flex-col">
                  <div className="border-b mb-3 flex items-center">
                    <p>{item?.name} ouviu pela primeira vez</p>
                    <p className="text-sm text-neutral-500 ml-3">há 2 horas</p>
                  </div>                  
                  <div className="flex">
                    {item?.albums?.map((album) => (
                      <div
                        className="bg-contain bg-no-repeat flex justify-center items-end mr-2"
                        style={{
                          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url("${album?.albumImg}")`,
                          width: "170px",
                          height: "170px",
                        }}
                      >
                        <p className="text-base font-bold text-white mb-4">
                          {album?.albumName}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* <img src={item?.albumImg} alt="" /> */}
                </div>
              ))}
            </div>
          </section>
          {/* <MusicAlbum 
        genre={props?.getAlbumById?.album?.artist?.genre}
        albumName={props?.getAlbumById?.album?.name}
        bandName={props?.getAlbumById?.album?.artist?.name}
        url={props?.getAlbumById?.album?.imgUrl}

        /> */}
        </main>
        <aside className="border-yellow-600 pl-4">
          <p className="mt-10 mb-2 font-bold">Amigos</p>
          <section className="flex items-center">
            <div className="rounded-full border w-14 h-14"></div>
            <div className="ml-3">Americo</div>
          </section>
          <section className="flex items-center mt-3">
            <div className="rounded-full border w-14 h-14"></div>
            <div className="ml-3">Mirella</div>
          </section>
        </aside>
      </div>
    </div>
  );
}
