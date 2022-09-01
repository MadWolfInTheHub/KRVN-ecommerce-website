import {FC, useEffect, useState} from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slider";
import { clothTypeOptions, sizeOptions } from '../../data/orderList';
import './Options.scss';

const Options:FC = () => {
  const { search } = useLocation();
  const pathname: NavigateFunction = useNavigate();
  const searchItems: string[][] = search.split('&').map(el => el.split('='));

  const setSearchInfo = (infoType: string): string |null => {
    const res: string[][] = searchItems.filter(el => el[0].includes(infoType));
    return res[0] === undefined ? null : res[0][1];
  }
  
  let clothes: string | null = setSearchInfo('clothes');
  let type: string | null = setSearchInfo('type');
  let size: string | null = setSearchInfo('size');
  let priceFrom: number = Number(setSearchInfo('from'));
  let priceTo: number = setSearchInfo('to') === null ? 300 : Number(setSearchInfo('to'));
  const [price, setPrice] = useState([priceFrom, priceTo]);
  const [cloth, setCloth] = useState(clothes);

  useEffect(() => {
    const openBtn: Element | null = document.querySelector('.searchBtn');
    const closeBtn: Element | null = document.querySelector('.options__closeBtn');

    const onOpenOptionsForm = (): void => {
      form?.classList.remove('hidden');
    }

    const onCloseOptionsForm = (): void => {
      form?.classList.add('hidden');
    }

    const form: Element | null = document.querySelector('.options');
    const searchInput: HTMLInputElement | null = document.querySelector('.options__searchField_text');
    const typeSelect: HTMLInputElement | null = document.querySelector('.options__type_clothes');
    const sizeSelect: HTMLInputElement | null = document.querySelector('.options__type_size');

    const onFormSubmit = (e:any): void => {
      e.preventDefault();
      onCloseOptionsForm();
      pathname(`?clothes=${searchInput?.value}&type=${typeSelect?.value}&size=${sizeSelect?.value}&from=${price[0]}&to=${price[1]}`);
    }
    
    openBtn?.addEventListener('click', onOpenOptionsForm);
    closeBtn?.addEventListener('click', onCloseOptionsForm);
    form?.addEventListener('submit', onFormSubmit);
    return (): void => {
      openBtn?.removeEventListener('click', onOpenOptionsForm);
      closeBtn?.removeEventListener('click', onCloseOptionsForm);
      form?.removeEventListener('submit', onFormSubmit);
    };
  });
  
  
  return (
    <>
      <button className='searchBtn btn'>
        <FontAwesomeIcon icon={faSearch}/>
      </button>

      <form className='options hidden'>
        <div className='options__closeBtn btn'>+</div>
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
              min={0}
              max={300}
              defaultValue={[0, 300]}
              step={5}
              pearling
              minDistance={10}
              onAfterChange={([minValue, maxValue]: number[]) => setPrice([minValue, maxValue])}
            />
            $ {price[0]} - $ {price[1]}
        </div>
        <button className='options__findBtn btn'>Find</button>
      </form>
    </>
  );
};

export default Options;