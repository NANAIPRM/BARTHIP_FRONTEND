import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePostContext } from '../../../hooks/usePostContext'
import { IiHead } from '../../../icons'
import { postApi } from '../../../api/post-api'
import { DrinkContext } from '../../../contexts/DrinkContextComponent'
import { useDrinkContext } from '../../../hooks/useDrinkContext'

function AdminPageContainer() {
  const [noPic, setNopic] = useState(true)
  const [file, setFile] = useState(null)
  const [fileUrl, setFileUrl] = useState('')

  const chooseFileFn = (e) => {
    if (e.target.files[0]) {
      setFileUrl(URL.createObjectURL(e.target.files[0]))
      setFile(e.target.files[0])
      setNopic(false)
    }
  }
  const [postInput, setPost] = useState({})

  const { postFn } = usePostContext()
  const { getDrinks } = useDrinkContext()
  const navigate = useNavigate()

  const handlePostInput = (e) =>
    setPost({ ...postInput, [e.target.name]: e.target.value })
  console.log(postInput)

  const handleBack = (e) => {
    e.preventDefault()
    navigate('/shop')
  }
  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    if (postInput.name) {
      formData.append('name', postInput.name)
    }
    if (postInput.price) {
      formData.append('price', +postInput.price)
    }
    if (file) {
      console.log(file)
      formData.append('image', file)
    }
    console.log(formData)
    const res = await postApi(formData)
    getDrinks()
    navigate('/shop')
  }

  return (
    <div className="flex flex-col items-center">
      <input
        id="uploadPic"
        type="file"
        placeholder="You can't touch this"
        className="hidden"
        onChange={(e) => chooseFileFn(e)}
      />

      <label
        htmlFor="uploadPic"
        className="relative h-[160px] w-[160px] aspect-[4/6] bg-slate-200 flex justify-center items-center"
      >
        <img
          className={`absolute w-full h-full object-cover ${
            noPic ? 'hidden' : ''
          }`}
          src={fileUrl}
          alt="upload picture"
          onError={(e) => setNopic(true)}
        />
        <IiHead className="w-14 h-14 " />
      </label>
      <label for="category">Choose category</label>
      <select name="category" id="category">
        <option value="Avatar">Avatar</option>
        <option value="Hat">Hat</option>
        <option value="Drink">Drink</option>
      </select>
      <textarea
        placeholder="Drink Name"
        name="name"
        value={postInput.name}
        className="w-[40%] h-[100px] text-xl border border-slate-200 shadow-md my-4 p-4"
        onChange={handlePostInput}
      ></textarea>
      <textarea
        placeholder="Drink Price"
        name="price"
        value={postInput.price}
        className="w-[40%] h-[100px] text-xl border border-slate-200 shadow-md my-4 p-4"
        onChange={handlePostInput}
      ></textarea>
      <div className="flex gap-5">
        <button className="btn btn-outline" onClick={handleBack}>
          Back
        </button>
        <button className="btn btn-outline" onClick={handleUpload}>
          UPLOAD
        </button>
      </div>
    </div>
  )
}

export default AdminPageContainer
