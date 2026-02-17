import { useState } from "react";


const Header = () =>{
    const [search, setSearch]=useState<string>('');

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value);
    }

    const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) =>{
           e.preventDefault();
    }

console.log(search)
    return(
<header className="bg-[rgb(25,118,210)] py-5">
     <div className="logo"></div>
    <form onSubmit={onSubmitHandler} action="">
    <input
    onChange={onChangeHandler}
    className="min-w-0
    p-[4px] pt-[4px] pb-[5px]
    text-current
    font-inherit
  mx-auto
  text-white
    tracking-inherit
    border-0
    border-b-2 border-gray-300
    bg-none
    focus:outline-none focus:border-blue-500
    box-content
    h-[1.4375em]
    m-0
    block
    [animation-name:mui-auto-fill-cancel]
    [animation-duration:10ms]
    -webkit-tap-highlight-color-transparent" type="text" />
            </form>
            <button></button>
        </header>
    )
}


export default Header;