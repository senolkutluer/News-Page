// src/Index.js
import React from 'react';
import Post from './Post';

function Index() {
  const contents = () => {
    const posts = [
      { id: 1, title: 'Alper Gezeravcı said goodbye to the world and is returning!', 
      content: 'A farewell ceremony was held at the International Space Station for the Ax-3 team, including Turkeys first astronaut Alper Gezeravcı. Speaking at the farewell ceremony, Gezeravcı said, "This was the starting point of a story, not a destination." he said.', image:'https://cdn1.ntv.com.tr/gorsel/5M8CXhx4sUOrq_baQp8qfw.jpg?width=1000&mode=crop&scale=both' },
      { id: 2, title: 'The groundbreaking struggle of the oncologist with brain cancer to treat himself', content: 'Richard Scolyer and Georgina Long, who were in two different parts of the world at that moment, were devastated by the viewing results on the screen.', image: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/a6bc/live/f5c840a0-c2a8-11ee-ace0-c35c1b4f6d82.png' },
      { id: 3, title: 'How might the change of the Central Bank Governor affect the markets and monetary policy?', content: 'Merkez Bankası Başkanı Hafize Gaye Erkan, 9 ayın sonunda görevi başkan yardımcılarından Fatih Karahan’a devredecek. Para politikasının işleyişi ve finansal piyasalardaki yansımalar açısından bu görev değişikliğinin kalıcı bir etkisi olmasını beklemiyorum. Zira ekonomik dengeler açısından önemli olan para politikasını kimin yönettiğinden ziyade politika duruşunda bir U-dönüşü olup olmadığıdır.', image: 'https://ichef.bbci.co.uk/news/793/cpsprodpb/4968/live/72e75070-c223-11ee-bfd5-a5ce51c69562.jpg' },
      { id: 4, title: 'Fatih Karahan: Who is the new president of the Central Bank?', content: 'Fatih Karahan was appointed as the Governor of the Central Bank with the decision signed by President Recep Tayyip Erdoğan and published in the Official Gazette dated February 3.', image: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/571f/live/eb1adc30-c212-11ee-9fd6-5b4a3eed1dc8.jpg' },
    ];

    const handleLike = (postId, isLiked) => {
      
      console.log(`${isLiked ? 'Liked' : 'Like removed'} - Post ID: ${postId}`);
    };

    const handleComment = (postId, comment) => {
      
      console.log(`Comment Added - Post ID: ${postId}, Comment: ${comment}`);
    };

    return (
      <div className="container mt-3" style={{ maxWidth: '650px',}}> 
      <h1 style={{ fontSize: '3rem'   }}>NEWS PAGE</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={handleLike} onComment={handleComment} />
      ))}
    </div>
    );
  };

  
  return contents();
}

export default Index;
