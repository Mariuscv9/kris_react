async function getImage() {
  const url =  `https://graph.facebook.com/v17.0/17841444085020222/media?fields=media_url,media_type&access_token=${process.env.INSTAGRAM_KEY}&limit=15`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export default async function LastPosts() {
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
    <div className="recent-row">
      <span id="anchor5" className="anchor"></span>
      {posts}
    </div>
  );
}
