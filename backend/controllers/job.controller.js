import {Job} from "../models/job.model.js"
import { User } from "../models/user.model.js";

export const postJob = async (req, res) =>
{
  try{
      const {title, description, requirements, salary , location, jobType, experience, position, companyId } = req.body;
      const userId = req.id;
      if(!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId )
      {
        return res.status(400).json({
          message : "Somthing is missing.",
          success : false
                });
      };

      const job = await Job.create({
        title,
        description,
        requirements,
        salary,
        location,
        jobType,
        experienceLevel : experience,
        position,
        company: companyId,
        created_by : req.id
      })

      return res.status(200).json({
        message : "New Job created Successfully.",
        job,
        success : true
              });
  }catch(error)
  {
    console.log(error);
  }
}

export const getAllJobs = async (req, res) =>
{
  try{
    const keyword = req.query.keyword || "";
    const query = {
      $or : [
        {title :{$regex : keyword, $options : "i"}},
        {description : {$regex : keyword, $options :"i"}}
      ]
      
    };
    const jobs = await Job.find(query).populate({
      path : "company"
    }).sort({createdAt : -1})
    if(!jobs)
    {
       return res.status(404).json({
        message : " Jobs not found.",
        success : false
       }) 
    };
    return res.status(200).json({
      jobs,
      success: true
    })

  }catch(error)
  {
    console.log(error)
  }
}

export const getJobById = async (req, res) =>
  {
    try{
      const jobId = req.params.id;
      const job = await Job.findById(jobId).populate({
        path:"application"
      });
      if(!job)
      {
        return res.status(404).json({
          message : " Jobs not fount.",
          success : false
         }) 
      };
      return res.status(200).json({
        job, 
        success:true
      });
    }catch(error)
    {
      console.log(error)
    }
  }

export const getAdminJobs = async (req, res) =>
  {
    try{
      const adminId = req.id;
      const jobs = await Job.find({created_by : adminId}).populate({
        path:'company'
      })
      if(!jobs)
      {
        return res.status(404).json({
          message : " Jobs not found.",
          success : false
         })
      };
      return res.status(200).json({
        jobs, 
        success:true
      });

      }catch(error)
      {
        console.log(error)
      }
  }

  export const getJobfromWishlist = async (req, res) =>
  {
    try{
        const userId = req.id;
        const user = await User.findOne({_id : userId}).populate({
          path : "wishlist",
          populate:{
            path : "company",
          }
        })
        if(!user)
          {
            return res.status(404).json({
              message : " User not found.",
              success : false
             })
          };
          return res.status(200).json({
            user, 
            success:true
          });

    }catch(error)
    {
      console.log(error)
    }
  }

  export const addToWishlist = async (req, res) =>
    {
      try{
          const params = req.params;
          const userId = req.id;
          const user = await User.findOne({_id : userId})
          user.wishlist.push(params.id);
          await user.save();
          if(!user)
            {
              return res.status(404).json({
                
                success : false
               })
            };
            return res.status(200).json({
              message : "Added to wishlist", 
              success:true
            });
      }catch(error)
      {
        console.log(error)
      }
    }

    export const removeFromWishlist = async (req, res) =>
      {
        try{
            const params = req.params;
            const userId = req.id;
            await User.updateOne({_id : userId}, {$pull : {wishlist: params.id}})
              return res.status(200).json({
                message : "Successfully deleted to wishlist", 
                success:true
              });
        }catch(error)
        {
          console.log(error)
        }
      }
  
  