(function(root){const profiles={
eva:{id:'eva',name:'On foot',speed_kmh:2.5,max_slope:15,climb_weight:10,visual_weight:10,ascent_minutes_per_m:.05,description:'Balances a direct walk with gentler terrain. Travel time accounts for climbing where elevation is known.'},
rover:{id:'rover',name:'Rover',speed_kmh:6,max_slope:12,climb_weight:4,visual_weight:7,ascent_minutes_per_m:.01,description:'Favors smoother drivable ground and avoids steep inclines.'},
cargo:{id:'cargo',name:'Cargo rover',speed_kmh:4,max_slope:10,climb_weight:18,visual_weight:18,ascent_minutes_per_m:.03,description:'Prioritizes gentle grades and smoother ground when carrying a heavy load.'}
};function get(id){return profiles[id]||profiles.eva}const api={profiles,get};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.MarsTransport=api;})(typeof globalThis!=='undefined'?globalThis:this);
