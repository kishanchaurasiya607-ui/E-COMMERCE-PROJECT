import { useState } from "react";

export default function Profile() {

  const [profile, setProfile] = useState({
    name: "Kishan Chaurasiya",
    email: "kishan@gmail.com",
    phone: "+91 9876543210",
    gender: "Male",
    address: "Lucknow, Uttar Pradesh",
    image: localStorage.getItem("profileImage") || null,
  });

  const [tempProfile, setTempProfile] = useState(profile);
  const [editProfile, setEditProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  

  const handleEdit = () => {
    setTempProfile(profile);
    setEditProfile(true);
  };

  const handleSave = () => {
    setProfile(tempProfile);
    localStorage.setItem("profileImage", tempProfile.image || "");
    setEditProfile(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setEditProfile(false);
  };

  const handleChange = (e) => {
    setTempProfile({ ...tempProfile, [e.target.name]: e.target.value });
  };

  

  const handleImagePick = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imgURL = URL.createObjectURL(file);

    setProfile((p) => ({ ...p, image: imgURL }));
    setTempProfile((p) => ({ ...p, image: imgURL }));
    localStorage.setItem("profileImage", imgURL);
    setOpenMenu(false);
  };

  const handleDeleteImage = () => {
    setProfile((p) => ({ ...p, image: null }));
    setTempProfile((p) => ({ ...p, image: null }));
    localStorage.removeItem("profileImage");
    setOpenMenu(false);
  };

  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">

       
        <div className="bg-white p-5 rounded shadow flex justify-between">
          <h2 className="text-xl font-semibold">My Profile</h2>

          {!editProfile ? (
            <button
              onClick={handleEdit}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          )}
        </div>

     
        <div className="grid md:grid-cols-3 gap-6">

          
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="flex items-center justify-center gap-3">
              
              
              {profile.image ? (
                <img
                  src={profile.image}
                  className="w-28 h-28 rounded-full object-cover ring-4 ring-blue-100"
                  alt="profile"
                />
              ) : (
                <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center text-white text-sm">
                  No Image
                </div>
              )}

              
              <div className="relative">
                <button
                  onClick={() => setOpenMenu(!openMenu)}
                  className="text-blue-600 text-sm font-medium"
                >
                  Edit
                </button>

                {openMenu && (
                  <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow z-10">
                    
                    
                    <label className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                       Camera
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleImagePick}
                        className="hidden"
                      />
                    </label>

                    
                    <label className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
                     Gallery
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImagePick}
                        className="hidden"
                      />
                    </label>

                    
                    <button
                      onClick={handleDeleteImage}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            <h3 className="mt-4 font-medium">{profile.name}</h3>
            <p className="text-sm text-gray-500">{profile.email}</p>
          </div>

         
          <div className="md:col-span-2 bg-white p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {["name", "email", "phone"].map((f) => (
                <div key={f}>
                  <label className="text-sm text-gray-600 capitalize">{f}</label>
                  {editProfile ? (
                    <input
                      name={f}
                      value={tempProfile[f]}
                      onChange={handleChange}
                      className="w-full mt-1 p-2 border rounded"
                    />
                  ) : (
                    <p className="mt-1">{profile[f]}</p>
                  )}
                </div>
              ))}

              <div>
                <label className="text-sm text-gray-600">Gender</label>
                {editProfile ? (
                  <select
                    name="gender"
                    value={tempProfile.gender}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                ) : (
                  <p className="mt-1">{profile.gender}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-gray-600">Address</label>
                {editProfile ? (
                  <textarea
                    name="address"
                    value={tempProfile.address}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border rounded"
                  />
                ) : (
                  <p className="mt-1">{profile.address}</p>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
