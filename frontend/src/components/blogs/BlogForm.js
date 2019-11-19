import React from 'react'
import makeAnimated from 'react-select/animated'
import CreatableSelect from 'react-select/creatable'

const animatedComponents = makeAnimated()

const BlogForm = ({ blogData, handleChange, handleSubmit, options, handleCreatableSelect }) => (

  <section>
    <h2 className="centre">Add a New Blog</h2>
    <form className="centre" onSubmit={handleSubmit}>
      <div className="formBackground form-group">
        <div className="form-group">

          <label className="form-label">Title</label>
          <input
            className="form-input"
            type="text"
            name="title"
            placeholder="Blog Title"
            value={blogData.title}
            onChange={handleChange}
          />
          <label className="form-label">Subtitle</label>
          <input
            className="form-input"
            type="text"
            name="subtitle"
            placeholder="Blog Subtitle"
            value={blogData.subtitle}
            onChange={handleChange}
          />
          <label className="form-label">Author</label>
          <input
            className="form-input"
            type="text"
            name="author"
            placeholder="Blog Author"
            value={blogData.author}
            onChange={handleChange}
          />
          <label className="form-label">Story</label>
          <input
            className="form-input"
            type="text"
            name="story"
            placeholder="Blog Story"
            value={blogData.story}
            onChange={handleChange}
          />
          <label className="form-label">Date Published</label>
          <input
            className="form-input"
            type="text"
            name="date_published"
            placeholder="Date Blog Published"
            value={blogData.date_published}
            onChange={handleChange}
          />
          <label className="form-label">Tags</label>
          <CreatableSelect
            options={options}
            isMulti
            onChange={handleCreatableSelect}
            components={animatedComponents}
          />
          <br />
          <button className="btn" type="submit">Blog Me Up!</button>
          <br />
        </div>
      </div>
    </form>
  </section>
)
    
export default BlogForm