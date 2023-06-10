import './style.css';
import {useSelector} from "react-redux";

const CatDraw = ({ setSearch}) => {
    const dataSelect = useSelector(state => state.isData);
    const dataImg = useSelector(state => state.isDataImg)
    const selectedOption =  dataSelect.find((item) => item.id ===  'abys');
console.log('hhh', selectedOption)
        return(
            <>
                <div>
         <select className='select' onChange={(e) => {
              setSearch(e.target.value)

          }}>
       {dataSelect.map(({name,id}) => (
            <option key={id} value={id}>{name}</option>
            ))}
          </select>
                </div>
                <div>
                    {selectedOption?.name}
                    {selectedOption?.description}
                </div>
                {dataImg.map(({url, id}) => (
                    <img src={url} alt='img' className='img' key={id}/>
                ))}
            </>
)
};
export default CatDraw;