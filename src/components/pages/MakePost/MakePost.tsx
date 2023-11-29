import React, { useRef, useState } from 'react'
import "./MakePost.css"


interface ItemProps {
    idd: number;
    image: string;
    title: string;
    category: string;
    brand: string;
    description: string;
    size: string;
}
interface CategoryProps{
    title: string;
    submenu: any; 
    id: number; 
}
export const MakePost: React.FC<{ categories:CategoryProps[] }> = (props) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };



      const [selectedValue, setSelectedValue] = useState<string>(''); // Initialize with the default value

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    console.log('Selected Value:', value);
  };

  return (
    <div className='MakePost-Container'>
        <form className="PostForm">
            <input type="text" className='PostTittle' placeholder='Naslov Oglasa' />
            <div></div>
            <input type="file" className='PostImage'  accept='image/*' ref={fileInputRef}
        style={{ display: 'none' }}/>
            <label htmlFor="file" onClick={handleClick}>
                Izaberi Sliku
            </label>
            
            
            <div className="d">
                das
            </div>
            <select value={selectedValue} onChange={handleSelectChange}>
                
            {props.categories.map((item) => (
                
                    <option value="">{item.title}</option>
                
                ))}
            </select>
            <select>
                
            </select>


            
        </form>
    </div>
  )
}
