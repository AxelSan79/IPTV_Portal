import { Link } from "react-router-dom";

function DevNav() {
  return (
    <div className="fixed top-2 right-2 bg-black/80 p-3 rounded text-xs z-50 max-h-[90vh] overflow-auto">
      <div className="flex flex-col gap-1 text-white">
        <strong className="mb-1">DEV NAV</strong>

        {/* Main */}
        <Link to="/">Login</Link>
        <Link to="/Home">Home</Link>
        <Link to="/TV">Live TV</Link>
        <Link to="/VoD">VoD</Link>
        <Link to="/Cast">Cast</Link>
        <Link to="/Language">Language</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Check-Out">Check-Out</Link>

        <hr className="my-2 opacity-30" />

        {/* Services */}
        <strong>Services</strong>
        <Link to="/Services/HotelInfo">Hotel Info</Link>
        <Link to="/Services/Restaurant">Restaurant</Link>
        <Link to="/Services/Spa">Spa</Link>
        <Link to="/Services/Bill">Bill</Link>
        <Link to="/Services/Weather">Weather</Link>

        <hr className="my-2 opacity-30" />

        {/* VoD testing */}
        <strong>VoD Test</strong>
        <Link to="/VoD/1">VoD Asset 1</Link>
        <Link to="/VoD/2">VoD Asset 2</Link>
        <Link to="/VoD/1/watch">Watch Asset 1</Link>
      </div>
    </div>
  );
}

export default DevNav;

