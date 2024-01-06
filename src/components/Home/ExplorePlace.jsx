import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
const ExplorePlace = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Beach", active: true },
    { id: 2, name: "Mountain", active: false },
    { id: 3, name: "Waterfall", active: false },
    { id: 4, name: "Icebergs", active: false },
  ]);

  const popularData = [
    {
      id: 1,
      title: "Beach",
      data: [
        {
          id: 1,
          url: "https://i.pinimg.com/564x/10/08/e3/1008e32fc5fbc7df16b6fcdce7a496bd.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 3,
        },
        {
          id: 2,
          url: "https://i.pinimg.com/564x/22/83/fb/2283fb0197fe76178c04d1af4498d36a.jpg",
          location: "Canada",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 3,
          url: "https://i.pinimg.com/736x/64/51/99/645199ef5549d1e652905c8a34c464ed.jpg",
          location: "North island",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 1,
          url: "https://i.pinimg.com/564x/10/08/e3/1008e32fc5fbc7df16b6fcdce7a496bd.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 3,
        },
        {
          id: 2,
          url: "https://i.pinimg.com/564x/22/83/fb/2283fb0197fe76178c04d1af4498d36a.jpg",
          location: "Canada",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 3,
          url: "https://i.pinimg.com/736x/64/51/99/645199ef5549d1e652905c8a34c464ed.jpg",
          location: "North island",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
      ],
    },
    {
      id: 2,
      title: "Mountain",
      data: [
        {
          id: 1,
          url: "https://i.pinimg.com/564x/8d/f6/83/8df6838f9fc9dc7e2e2a6ab29a97f6d2.jpg",
          location: "Myanmar",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 2,
          url: "https://i.pinimg.com/564x/bf/93/52/bf9352f46b1a226af2147c7f6490d99e.jpg",
          location: "UnitedState",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 3,
          url: "https://i.pinimg.com/564x/02/87/62/02876208cc650a875059c0d5f0947a3d.jpg",
          location: "Malaysia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 1,
          url: "https://i.pinimg.com/564x/8d/f6/83/8df6838f9fc9dc7e2e2a6ab29a97f6d2.jpg",
          location: "Myanmar",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 2,
          url: "https://i.pinimg.com/564x/bf/93/52/bf9352f46b1a226af2147c7f6490d99e.jpg",
          location: "UnitedState",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 3,
          url: "https://i.pinimg.com/564x/02/87/62/02876208cc650a875059c0d5f0947a3d.jpg",
          location: "Malaysia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
      ],
    },
    {
      id: 3,
      title: "Waterfall",
      data: [
        {
          id: 1,
          url: "https://i.pinimg.com/564x/b5/8f/14/b58f14fbe25b9f9b8e8932fea560034c.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 2,
          url: "https://i.pinimg.com/564x/8b/07/4d/8b074d28c29564e6985dd7041a7172c5.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 3,
          url: "https://i.pinimg.com/564x/60/3a/fc/603afcaf13c3945dfeb84f250142b977.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 1,
          url: "https://i.pinimg.com/564x/b5/8f/14/b58f14fbe25b9f9b8e8932fea560034c.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 2,
          url: "https://i.pinimg.com/564x/8b/07/4d/8b074d28c29564e6985dd7041a7172c5.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 3,
          url: "https://i.pinimg.com/564x/60/3a/fc/603afcaf13c3945dfeb84f250142b977.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
      ],
    },
    {
      id: 4,
      title: "Icebergs",
      data: [
        {
          id: 1,
          url: "https://i.pinimg.com/564x/9c/04/9c/9c049c760dd74a8509c0cf69520fb6e4.jpg",
          location: "South America",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 2,
          url: "https://i.pinimg.com/564x/30/1e/c8/301ec89a933403238ce6b8cdd60ea236.jpg",
          location: "Malaysia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 3,
          url: "https://i.pinimg.com/564x/f1/d5/f0/f1d5f0e617b9bedba1cf288b947e732c.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 1,
          url: "https://i.pinimg.com/564x/9c/04/9c/9c049c760dd74a8509c0cf69520fb6e4.jpg",
          location: "South America",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 2,
          url: "https://i.pinimg.com/564x/30/1e/c8/301ec89a933403238ce6b8cdd60ea236.jpg",
          location: "Malaysia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
        {
          id: 3,
          url: "https://i.pinimg.com/564x/f1/d5/f0/f1d5f0e617b9bedba1cf288b947e732c.jpg",
          location: "Indonesia",
          name: "Horseshoe Bay",
          rating: 4.5,
        },
      ],
    },
  ];

  const handleCateClick = (clickedId) => {
    const newCategories = categories.map((cate) => ({
      ...cate,
      active: cate.id === clickedId,
    }));
    setCategories(newCategories);
  };

  const getActiveCategoryData = () => {
    const activeCategory = categories.find((cate) => cate.active);
    return (
      popularData.find((data) => data.title === activeCategory.name)?.data || []
    );
  };

  return (
    <div className="w-full">
      {/* title and cate  */}
      <div className="flex sm:flex-row flex-col justify-between items-center gap-5">
        <h1 className="text-2xl sm:text-4xl font-bold">Explore Place</h1>
        {/* cate info  */}
        <div className="flex justify-around w-full sm:w-2/5 font-semibold text-[10px] sm:text-lg">
          {categories.map((cate) => (
            <span
              key={cate.id}
              onClick={() => handleCateClick(cate.id)}
              className="flex flex-col overflow-hidden cursor-pointer"
            >
              {cate.name}
              <motion.hr
                layout
                animate={{ scaleX: cate.active ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-3/4 bg-orange-500 h-[3px] origin-left"
              />
            </span>
          ))}
          <p className="text-orange-500">View all</p>
        </div>
      </div>
      {/* change pic base on cate  */}
      <AnimatePresence>
        <div className=" grid grid-cols-1 sm:grid-cols-3 w-full my-10 gap-5 ">
          {getActiveCategoryData().map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="h-[400px] col-span-1 p-2 border rounded-lg shadow-lg"
            >
              <img
                className=" w-full h-3/4 object-cover rounded-lg"
                src={item.url}
                alt={item.title}
              />
              <div className="flex justify-between p-5">
                <div className="flex flex-col items-center">
                  <p className="font-bold">{item.name}</p>
                  <p className="flex items-center">
                    <IoLocationOutline className="text-blue-500 text-lg" />
                    {item.location}
                  </p>
                </div>
                <span className="text-orange-500 flex items-center gap-2">
                  <FaStar />
                  {item.rating}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default ExplorePlace;
