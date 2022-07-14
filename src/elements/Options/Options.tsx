import React, {FC, useEffect, useState} from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Slider from '@material-ui/core/Slider';
import './options.scss';

const clothTypeOptions: string[] = ['hats', 'pants', 'shirts', 'snickers', 'sportswear', 't-shirt', 'underwear']
const sizeOptions: string[] = ['XS', 'S', 'M', 'L']

const Options:FC = () => {
  const pathname: NavigateFunction = useNavigate()
  const example = '?clothes=&type=&hats&size=S&from=0&to=1000'
  const searchItems = example.split('&').map(el => el.split('='));

  const setSearchInfo = (infoType: string) => {
    const res: string[][] = searchItems.filter(el => el[0].includes(infoType));
    return res[0] === undefined ? null : res[0][1]
  }
  
  let clothes: string | null = setSearchInfo('clothes')
  let type: string | null = setSearchInfo('type')
  let size: string | null = setSearchInfo('size')
  let priceFrom: number = Number(setSearchInfo('from'));
  let priceTo: number = Number(setSearchInfo('to'))
  const [price, setPrice] = useState([priceFrom, priceTo])
  const [cloth, setCloth] = useState(clothes)


  // Changing State when volume increases/decreases
  const rangeSelector = (event: any, newValue: any): void => {
    setPrice(newValue)
  };

  useEffect(() => {
    const openBtn = document.querySelector('.searchBtn')
    const closeBtn = document.querySelector('.options__closeBtn')

    const onOpenOptionsForm = (e: any) => {
      form?.classList.remove('hidden')
    }

    const onCloseOptionsForm = () => {
      form?.classList.add('hidden')
    }

    const form: Element | null = document.querySelector('.options')
    const searchInput: HTMLInputElement | null = document.querySelector('.options__searchField_text')
    const typeSelect: HTMLInputElement | null = document.querySelector('.options__type_clothes')
    const sizeSelect: HTMLInputElement | null = document.querySelector('.options__type_size')

    const onFormSubmit = (e:any) => {
      pathname(`?clothes=${searchInput?.value}&type=${typeSelect?.value}&size=${sizeSelect?.value}&from=${price[0]}&to=${price[1]}`)
      e.preventDefault()
      onCloseOptionsForm()
    }
    
    openBtn?.addEventListener('click', onOpenOptionsForm)
    closeBtn?.addEventListener('click', onCloseOptionsForm)
    form?.addEventListener('submit', onFormSubmit)
    return () => {
      openBtn?.removeEventListener('click', onOpenOptionsForm)
      closeBtn?.removeEventListener('click', onCloseOptionsForm)
      form?.removeEventListener('submit', onFormSubmit)
      
    }
  })
  
  
  return (
    <>
      <button className='searchBtn'>
        <FontAwesomeIcon icon={faSearch}/>
      </button>

      <form className='options hidden'>
        <button className='options__closeBtn'>+</button>
        <h4 className='options__header'>What are you looking for?</h4>
        <div className='options__searchField'>
          <FontAwesomeIcon className='options__searchField_icon' icon={faSearch}/>
          <input 
            className='options__searchField_text' 
            type="search" 
            value={cloth === null ? '' : cloth} 
            onChange={(e) => setCloth(e.target.value)}/>
        </div>
        <div className='options__type'>
          <select className='options__type_clothes' id="cloth-types" name="cloth-types">
            {
              clothTypeOptions.map(el => (
                <option 
                  key={el} 
                  value={el} 
                  selected={el === type}>
                    {el}
                  </option>  
              ))
            }
          </select>
          <select className='options__type_size' id="cloth-types" name="cloth-types">
            {
              sizeOptions.map(type => (
                <option 
                  key={type} 
                  value={type} 
                  selected={type === size}>
                    {type}
                </option>
              ))
            }
          </select> 
        </div>
        <div className='options__price'>
            <Slider
              className='options__price_range'
              value={price}
              min={0}
              max={300}
              step={5}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
            />
            $ {price[0]} - $ {price[1]}
        </div>
        <button className='options__findBtn'>Find</button>
      </form>
    </>
  );
};

export default Options;