import Link from 'next/link';

import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function Home() {
  let [posts, setPosts] = useState([]);

  useEffect(async () => {
    let { data, error } = await supabase.from('posts').select('*');
    setPosts(data);
  });

  return (
    <div>
      <h1>Main Page</h1>
      <Link href="/aboutet
      ">Lien vers About</Link>
      {posts.map(post => (
        <p>{post.title}</p>
      ))}
    </div>
  );
}
