import BackToTopButton from "../components/BackToTopButton";
import GalleryHeader from "./GalleryHeader";


async function getImage() {
  const url =  `https://graph.facebook.com/v17.0/17841444085020222/media?fields=media_url,media_type&access_token=${process.env.INSTAGRAM_KEY}&limit=100`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
  }
  
  export default async function Gallery() {
    const data = await getImage();
    const recentFeed = data.data;
    const imagesOnly = recentFeed.filter((item) => item.media_type !== "VIDEO");
    const posts = imagesOnly.map((post) => {
      return (
        <div key={post.id} className="recent-col">
          <a href={post.media_url}>
            <img src={post.media_url} alt={post.caption} />
          </a>
        </div>
      );
    });
    return (
    <>
    <GalleryHeader />
      <div className="recent-row">
        {posts} 
        <BackToTopButton />
      </div>
    </>
    );
  }
  