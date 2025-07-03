import ImageContainer from "./ImageContainer"
import { useState } from "react";
import "./MainPage.css"
import disk1 from "../assets/disk1.jpg";
import disk2 from "../assets/disk2.jpg";
import disk3 from "../assets/disk3.jpg";
import disk4 from "../assets/disk4.jpg";
import disk5 from "../assets/disk5.jpg";
import disk6 from "../assets/disk6.jpg";
import disk7 from "../assets/disk7.jpg";
import disk8 from "../assets/disk8.jpg";
import disk9 from "../assets/disk9.jpg";
import disk10 from "../assets/disk10.jpg";
import disk11 from "../assets/disk11.jpg";
import disk12 from "../assets/disk12.jpg";
import disk13 from "../assets/disk13.jpg";
import disk14 from "../assets/disk14.jpg";
import PromotionalVinylCard from "./PromotionalVinylCard";
import diskBackground from "../assets/background-disk.png"; // Add this import at the top


const letterRanges = ["A-F", "G-L", "M-R", "S-Z"];  
const Vinyls = [
    { id: 1, artist: "MF DOOM", album: "Mmm.. food", price: 55, image: disk1, category: "Hip-Hop", quantity: 0 },
    { id: 2, artist: "Kaytranada", album: "KAYTRAMINE", price: 70, image: disk2, category: "Electronic", quantity: 0 },
    { id: 3, artist: "Zedd", album: "True Colors", price: 40, image: disk3, category: "Electronic", quantity: 0 },
    { id: 4, artist: "Twenty-One Pilots", album: "Breach", price: 65, image: disk4, category: "Alternative", quantity: 0 },
    { id: 5, artist: "Daft Punk", album: "Discovery", price: 85, image: disk5, category: "Electronic", quantity: 0 },
    { id: 6, artist: "Maroon 5", album: "Overexposed", price: 80, image: disk6, category: "Pop", quantity: 0 },
    { id: 7, artist: "Paramore", album: "Brand New Eyes", price: 50, image: disk7, category: "Rock", quantity: 0 },
    { id: 8, artist: "Bôa", album: "Twilight", price: 44, image: disk8, category: "Rock", quantity: 0 },
    { id: 9, artist: "Bring Me The Horizon", album: "That's the spirit", price: 49, image: disk9, category: "Metal", quantity: 0 },
    { id: 10, artist: "Linkin Park", album: "Meteora", price: 32, image: disk10, category: "Heavy Rock", quantity: 0 },
    { id: 11, artist: "Isaiah Rashad", album: "The Sun's Tirade", price: 47, image: disk11, category: "Hip-Hop", quantity: 0 },
    { id: 12, artist: "Tame Impala", album: "Currents", price: 59, image: disk12, category: "Psychedelic", quantity: 0 },
    { id: 13, artist: "Low Roar", album: "O", price: 31, image: disk13, category: "Indie", quantity: 0 }
];
const promoVinyls = [
    { id: 14, artist: "Nujabes", album: "Metaphorical Music", price: 60, image: disk14, category: "Hip-Hop", quantity: 0 },
    { id: 15, artist: "Nujabes", album: "Modal Soul", price: 40, image: disk3, category: "Hip-Hop", quantity: 0 }
];

function MainPage() {
  

  // Get unique values for each filter category
  const artists = [...new Set([...Vinyls, ...promoVinyls].map(v => v.artist))];
  const categories = [...new Set([...Vinyls, ...promoVinyls].map(v => v.category))];
  const albums = [...new Set([...Vinyls, ...promoVinyls].map(v => v.album))];
  const prices = ["0-40", "41-60", "61-100"];

  // State for filters
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAlbums, setSelectedAlbums] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  // Pagination
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const letterInRange = (char, [start, end]) =>
  char.toUpperCase() >= start && char.toUpperCase() <= end;

  const nameInSelectedRanges = (name, selectedRanges) => {
        const firstChar = name.charAt(0).toUpperCase();
       return selectedRanges.some(rangeStr => {
    const [start, end] = rangeStr.split("-");
    return firstChar >= start && firstChar <= end;
  });
    };


  // Filter logic
  const filterVinyls = (vinyls) => {
    return vinyls.filter(v => {
      const artistMatch = selectedArtists.length===0 || nameInSelectedRanges(v.artist,selectedArtists);
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(v.category);
      const albumMatch = selectedAlbums.length===0|| nameInSelectedRanges(v.album,selectedAlbums);
      const priceMatch =
        selectedPrices.length === 0 ||
        selectedPrices.some(range => {
          const [min, max] = range.split('-').map(Number);
          return v.price >= min && v.price <= max;
        });
      return artistMatch && categoryMatch && albumMatch && priceMatch;
    });
  };

  const filteredVinyls = filterVinyls(Vinyls);
  const filteredPromoVinyls = filterVinyls(promoVinyls);

  const totalPages = Math.ceil(filteredVinyls.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVinyls = filteredVinyls.slice(startIndex, startIndex + itemsPerPage);

  // Checkbox handlers
  const handleCheckbox = (value, selected, setSelected) => {
    setCurrentPage(1); 
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const goPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handleClearFilters=()=>{
  setSelectedArtists([]);
  setSelectedCategories([]);
  setSelectedAlbums([]);
  setSelectedPrices([]);
  setCurrentPage(1);
  }

  return (
    <>
      <div id="main-page">
        <div id="filters">
          <div id="filter-img">
            <img
              src={diskBackground}
              alt="Decorative disk"
            />
          </div>
          <div id="filter-content">
          <details>
            <summary>Artist</summary>
            {letterRanges.map(rangeStr => (
             <div key={rangeStr}>
             <label>
            <input
                type="checkbox"
                checked={selectedArtists.includes(rangeStr)}
                 onChange={() => handleCheckbox(rangeStr, selectedArtists, setSelectedArtists)}
                    />
            {rangeStr}
                </label>
            </div>
            ))}
          </details>
          <details>
            <summary>Category</summary>
            {categories.map(category => (
              <div key={category}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCheckbox(category, selectedCategories, setSelectedCategories)}
                  />
                  {category}
                </label>
              </div>
            ))}
          </details>
          <details>
            <summary>Album</summary>
           {letterRanges.map(rangeStr => (
             <div key={rangeStr}>
             <label>
            <input
                type="checkbox"
                checked={selectedAlbums.includes(rangeStr)}
                 onChange={() => handleCheckbox(rangeStr, selectedAlbums, setSelectedAlbums)}
                    />
            {rangeStr}
                </label>
            </div>
            ))}
          </details>
            <details>
            <summary>Price</summary>
            {prices.map(range => (
              <div key={range}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedPrices.includes(range)}
                    onChange={() => handleCheckbox(range, selectedPrices, setSelectedPrices)}
                  />
                  {range}
                </label>
              </div>
            ))}
            </details>
         <button onClick={handleClearFilters}>
        Clear All Filters
        </button>
        </div>
        </div>
        <div id="all-vinyls">
            {filteredPromoVinyls.map((vinyl,index)=>(
                <PromotionalVinylCard key={index} Vinyl={vinyl}/>
            ))}
          {currentVinyls.map((vinyl, index) => (
            <ImageContainer key={index} Vinyl={vinyl} />
          ))}
        </div>
      </div>
      <div>
        <div id="pagination-controls">
          <button onClick={goPrevPage} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={goNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </>
  );
}

export default MainPage;

