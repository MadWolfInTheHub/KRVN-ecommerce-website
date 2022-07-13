import React, {FC, useEffect, useState} from 'react';
import './options.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from '@material-ui/core/Slider';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

const clothTypeOptions: string[] = ['dresses', 'hats', 'pants', 'shirts', 'snickers', 'sportswear', 't-shirt', 'underwear']
const sizeOptions: string[] = ['XS', 'S', 'M', 'L']

const Options:FC = () => {
  const pathname: NavigateFunction = useNavigate()
  const {search}  = useLocation()
  const example = '?clothes=&type=&hats&size=S&from=0&to=1000'
  const searchItems = example.split('&').map(el => el.split('='));

  const setSearchInfo = (infoType: string) => {
    const res: string[][] = searchItems.filter(el => el[0].includes(infoType));

    return res[0] === undefined ? null : res[0][1]
  }
  
  let clothes: string | null = setSearchInfo('clothes')
  let type: string | null = setSearchInfo('type')
  let size: string | null = setSearchInfo('size')
  let priceFrom: number = Number(setSearchInfo('price'));
  let priceTo: number = Number(setSearchInfo('price')) === 0 ? 1000 :  Number(setSearchInfo('price'));
  const [price, setPrice] = useState([priceFrom, priceTo])
  const [cloth, setCloth] = useState(clothes)


  // Changing State when volume increases/decreases
  const rangeSelector = (event: any, newValue: any): void => {
    setPrice(newValue)
  };
  

  useEffect(() => {
    pathname(example)
    
  }, [example])

  useEffect(() => {
    const form: Element | null = document.querySelector('.options')
    const searchInput: Element | null = document.querySelector('.options__searchField_text')
    const typeSelect: Element | null = document.querySelector('.options__type_clothes')
    const sizeSelect: Element | null = document.querySelector('.options__type_size')

    const onFormSubmit = (e:any) => {
      e.preventDefault()
      console.log(e.target)
    }
    
    form?.addEventListener('submit', onFormSubmit)
    return () => {
      
    }
  },[])
  
  
  return (
    <form className='options'>
      <h4 className='options__header'>What you are looking for?</h4>
      <div className='options__searchField'>
        <FontAwesomeIcon className='options__searchField_icon' icon={faSearch}/>
        <input className='options__searchField_text' type="text" value={cloth === null ? '' : cloth} onChange={(e) => setCloth(e.target.value)}/>
      </div>
      <div className='options__type'>
        <select className='options__type_clothes' id="cloth-types" name="cloth-types">
          {
            clothTypeOptions.map(el => (
              <option key={el} value={el} selected={el === type}>{el}</option>  
            ))
          }
        </select>
        <select className='options__type_size' id="cloth-types" name="cloth-types">
          {
            sizeOptions.map(type => (
              <option key={type} value={type} selected={type === size} onClick={e => console.log()}>{type}</option>
            ))
          }
        </select> 
      </div>
      <div className='options__price'>
          <Slider
            className='options__price_range'
            value={price}
            min={0}
            max={1000}
            step={5}
            onChange={rangeSelector}
            valueLabelDisplay="auto"
          />
          $ {price[0]} - $ {price[1]}
      </div>
      <button className='options__findBtn'>Find</button>
    </form>
  );
};

export default Options;