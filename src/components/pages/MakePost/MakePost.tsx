import React, { useEffect, useRef, useState } from 'react'
import "./MakePost.css"
import { group } from 'console';
import { option } from 'yargs';
import item from '../../Item/item';
import ItemProps from '../../ItemProps';
interface CategoryProps{
    title: string;
    submenu: any; 
    id: number; 
}



const MenuOptions = (menuItemss:CategoryProps[]) => {
    let array:CategoryProps[]=[];
    for (const menuItems of menuItemss) if(!array.some(item => item.title===menuItems.title))array.push(menuItems);
    return array;
}
const ChildrenMenuOptions = (menuItemss:CategoryProps[]) => {
    let array:CategoryProps[]=[];
    for (const menuItems of menuItemss) {

        for(const menuItem of menuItems.submenu){
            if(!array.some(item => item.title===menuItem.title))array.push(menuItem);
        }

    }
    
    return array;
}
const GrandMenuOptions = (menuItemss:CategoryProps[]) => {
    let array:CategoryProps[]=[];
    for (const menuItems of menuItemss) {

        for(const menuItem of menuItems.submenu){
            
                if(!array.some(item => item.title===menuItem.title))array.push(menuItem);
            
        }
    }
    
    return array;
}


export const MakePost: React.FC<{ categories:CategoryProps[] }> = (props) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const handleClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };







    

    const [Grupa, setGrupa]=useState<CategoryProps | null>();
    const [PodGrupa, setPodGrupa]= useState<CategoryProps | null>();
    const [files, setFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);

      console.log(previews);

    useEffect(() => {
        if (!files) return;
        let tmp = [];
        for (let i = 0; i < files.length; i++) {
          tmp.push(URL.createObjectURL(files[i]));
        }
        const objectUrls = tmp;
        setPreviews(objectUrls);
    
        // free memory
        for (let i = 0; i < objectUrls.length; i++) {
          return () => {
            URL.revokeObjectURL(objectUrls[i]);
          };
        }
      }, [files]);


    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const foundItem = props.categories.find((item) => item.title ===value);
        if (foundItem) {
            console.log(foundItem);
            setGrupa(foundItem)
          } else {
            console.log('Category not found');
            setGrupa(null);
          }
        
      };
    
      const handleSelectChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
      
        const foundItem = MenuList.find((item: CategoryProps) => item.title === value);
      
        if (foundItem) {
          console.log(foundItem);
          setPodGrupa(foundItem);
          console.log(PodGrupa);
        } else {
          console.log('Category not found');
          setPodGrupa(null);
        }
      };
  const optionsForCategory=[];

  const MenuList=ChildrenMenuOptions(props.categories);



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      // Convert FileList to an array and update state
      const fileList = Array.from(e.target.files);
      setFiles(fileList);
    }
  };
  /*optionsForCategory.push(props.categories.map((items)=>{
    for(const item of items.submenu){
        
        if(item.submenu){
            for(const i of item.submenu){
                console.log(i)
                return i.title;
            }
        }else{
            
            return item.title;
        }
    }
  }))

  console.log(optionsForCategory);*/


    
    const nesto = () =>{
        
        
    }
    

      
    return (
    <div className='MakePost-Container'>
        <form className="PostForm">

            <h2 className='PostText'>Kreiraj Oglas</h2>

            <input type="text" className='PostTittle' placeholder='Naslov Oglasa' />
            <div className='PostPhoto'>
            <input type="file" className='PostImage'  accept='image/*' ref={fileInputRef}
        style={{ display: 'none' }} onChange={handleFileChange}/>
            <label htmlFor="file" onClick={handleClick}>
                Izaberi sliku
            </label>

            {previews && (
  previews.map((pic, index) => (
    <img
      key={index}
      src={pic}
      alt={`Preview ${index}`}
    />
  ))
)}
            </div>
            
            <input type="text" className='PostBrend' placeholder='Brend' />

            <input type="text" className='PostSize' placeholder='Veličina' />
            
            <h4>Izaberi Kategoriju:</h4>
            <div className='Category'>
                <select  onChange={handleSelectChange}>
                <option value=" "> </option>
                    {props.categories.map((item) => (
                        <option value={item.title}>{item.title}</option>
                    ))}
                </select>
                {Grupa && (
                    <select onChange={handleSelectChange2}>
                        <option value=" "> </option>
                        {Grupa.submenu.map((item: CategoryProps) => (
                            <option value={item.title}>{item.title}</option>
                        ))}
                    </select>
                    )}

                {PodGrupa?.submenu && (
                    <select>
                        <option value=" "> </option>
                        {PodGrupa.submenu.map((item: CategoryProps) => (
                            <option value={item.title}>{item.title}</option>
                        ))}
                    </select>
                )}
            </div>
            
      <textarea id="description" name="description" rows={4} cols={50} placeholder='Opis'></textarea>
        </form>
        
    </div>
  )
  
}
