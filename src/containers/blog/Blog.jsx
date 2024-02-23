import React from 'react';
import './blog.css';
import { Article } from '../../components/';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A Lot is Happening, We are Blogging About it.</h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article imgUrl={blog01} date="Feb 27, 2024" title="GPT-3 and OpenAI is The Future. Let us Explore how it is?"/>
        </div>

        <div className="gpt3__blog-container__groupB">
          <Article imgUrl={blog02} date="Feb 27, 2024" title="GPT-3 and OpenAI is The Future. Let us Explore how it is?"/>
          <Article imgUrl={blog03} date="Feb 27, 2024" title="GPT-3 and OpenAI is The Future. Let us Explore how it is?"/>
          <Article imgUrl={blog04} date="Feb 27, 2024" title="GPT-3 and OpenAI is The Future. Let us Explore how it is?"/>
          <Article imgUrl={blog05} date="Feb 27, 2024" title="GPT-3 and OpenAI is The Future. Let us Explore how it is?"/>
        </div>
      </div>

    </div>
  )
}

export default Blog