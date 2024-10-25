
export default function TabButtons({label, onSelect, isSelected}){
    return(
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{label}
      </button>
        </li>
    );
}