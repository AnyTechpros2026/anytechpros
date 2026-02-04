import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../firebase/config';

const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const navigate = useNavigate();

  const [jobForm, setJobForm] = useState({
    title: '',
    department: '',
    location: '',
    type: '',
    description: '',
    requirements: [],
    responsibilities: [],
    includeGithub: false,
  });

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin-login');
    } else {
      fetchJobs();
      fetchApplications();
    }
  }, [navigate]);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('posted_date', { ascending: false });
      
      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('applied_date', { ascending: false });
      
      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  const handleLogout = async () => {
    sessionStorage.removeItem('adminAuthenticated');
    sessionStorage.removeItem('adminUserId');
    navigate('/');
  };

  const handleAddJob = async (e) => {
    e.preventDefault();
    try {
      // Convert camelCase to snake_case for database
      const dbJobData = {
        title: jobForm.title,
        department: jobForm.department,
        location: jobForm.location,
        type: jobForm.type,
        description: jobForm.description,
        requirements: jobForm.requirements,
        responsibilities: jobForm.responsibilities,
        include_github: jobForm.includeGithub, // Convert to snake_case
      };

      if (editingJob) {
        const { error } = await supabase
          .from('jobs')
          .update(dbJobData)
          .eq('id', editingJob.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('jobs')
          .insert([{
            ...dbJobData,
            posted_date: new Date().toISOString(),
          }]);
        
        if (error) throw error;
      }
      setShowJobForm(false);
      setEditingJob(null);
      setJobForm({
        title: '',
        department: '',
        location: '',
        type: '',
        description: '',
        requirements: [],
        responsibilities: [],
        includeGithub: false,
      });
      fetchJobs();
      alert('Job posted successfully!');
    } catch (error) {
      console.error('Error saving job:', error);
      alert('Error saving job: ' + error.message);
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        const { error } = await supabase
          .from('jobs')
          .delete()
          .eq('id', jobId);
        
        if (error) throw error;
        fetchJobs();
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  const handleEditJob = (job) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description,
      requirements: job.requirements || [],
      responsibilities: job.responsibilities || [],
      includeGithub: job.include_github || false, // Convert from snake_case
    });
    setShowJobForm(true);
  };

  const handleArrayInput = (field, value) => {
    setJobForm({
      ...jobForm,
      [field]: value.split('\n').filter(item => item.trim() !== '')
    });
  };

  return (
    <div className="min-h-screen bg-taupe/30 dark:bg-charcoal pt-20">
      <div className="container-custom px-4 md:px-6 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-heading font-light text-charcoal dark:text-sandstone">
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-sm uppercase tracking-widest font-bold px-6 py-3 hover:opacity-90 transition-all duration-300"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-charcoal/20 dark:border-sandstone/20">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`pb-4 px-6 text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
              activeTab === 'jobs'
                ? 'border-b-2 border-charcoal dark:border-sandstone text-charcoal dark:text-sandstone'
                : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
            }`}
          >
            Job Positions
          </button>
          <button
            onClick={() => setActiveTab('applications')}
            className={`pb-4 px-6 text-sm uppercase tracking-widest font-medium transition-all duration-300 ${
              activeTab === 'applications'
                ? 'border-b-2 border-charcoal dark:border-sandstone text-charcoal dark:text-sandstone'
                : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
            }`}
          >
            Applications ({applications.length})
          </button>
        </div>

        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading text-charcoal dark:text-sandstone">
                Manage Job Positions
              </h2>
              <button
                onClick={() => {
                  setShowJobForm(!showJobForm);
                  setEditingJob(null);
                  setJobForm({
                    title: '',
                    department: '',
                    location: '',
                    type: '',
                    description: '',
                    requirements: [],
                    responsibilities: [],
                    includeGithub: false,
                  });
                }}
                className="bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-sm uppercase tracking-widest font-bold px-6 py-3 hover:opacity-90 transition-all duration-300"
              >
                {showJobForm ? 'Cancel' : 'Add New Job'}
              </button>
            </div>

            {/* Job Form */}
            {showJobForm && (
              <div className="bg-white dark:bg-charcoal-light rounded-xl p-6 mb-8">
                <h3 className="text-xl font-heading text-charcoal dark:text-sandstone mb-6">
                  {editingJob ? 'Edit Job Position' : 'Add New Job Position'}
                </h3>
                <form onSubmit={handleAddJob} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        value={jobForm.title}
                        onChange={(e) => setJobForm({...jobForm, title: e.target.value})}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                        placeholder="e.g., Senior Software Engineer"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                        Department *
                      </label>
                      <select
                        value={jobForm.department}
                        onChange={(e) => setJobForm({...jobForm, department: e.target.value})}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      >
                        <option value="">Select Department</option>
                        <option value="Technology">Technology</option>
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Operations">Operations</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        value={jobForm.location}
                        onChange={(e) => setJobForm({...jobForm, location: e.target.value})}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                        placeholder="e.g., Bhopal, MP / Remote"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                        Job Type *
                      </label>
                      <select
                        value={jobForm.type}
                        onChange={(e) => setJobForm({...jobForm, type: e.target.value})}
                        required
                        className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      >
                        <option value="">Select Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                      Description *
                    </label>
                    <textarea
                      value={jobForm.description}
                      onChange={(e) => setJobForm({...jobForm, description: e.target.value})}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      placeholder="Enter job description"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                      Requirements (one per line)
                    </label>
                    <textarea
                      value={jobForm.requirements.join('\n')}
                      onChange={(e) => handleArrayInput('requirements', e.target.value)}
                      rows="6"
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      placeholder="e.g., Bachelor's degree in Computer Science&#10;3+ years of experience&#10;Proficiency in React"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal dark:text-sandstone mb-2">
                      Responsibilities (one per line)
                    </label>
                    <textarea
                      value={jobForm.responsibilities.join('\n')}
                      onChange={(e) => handleArrayInput('responsibilities', e.target.value)}
                      rows="6"
                      className="w-full px-4 py-3 bg-white dark:bg-charcoal border border-taupe dark:border-sandstone/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-charcoal dark:focus:ring-sandstone text-charcoal dark:text-sandstone"
                      placeholder="e.g., Develop and maintain web applications&#10;Collaborate with cross-functional teams&#10;Write clean, maintainable code"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="includeGithub"
                      checked={jobForm.includeGithub}
                      onChange={(e) => setJobForm({...jobForm, includeGithub: e.target.checked})}
                      className="w-5 h-5 text-charcoal dark:text-sandstone"
                    />
                    <label htmlFor="includeGithub" className="text-sm font-medium text-charcoal dark:text-sandstone">
                      Include GitHub field in application form (for technical positions)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-sm uppercase tracking-widest font-bold py-4 hover:opacity-90 transition-all duration-300"
                  >
                    {editingJob ? 'Update Job' : 'Post Job'}
                  </button>
                </form>
              </div>
            )}

            {/* Jobs List */}
            <div className="grid gap-6">
              {jobs.length === 0 ? (
                <div className="bg-white dark:bg-charcoal-light rounded-xl p-8 text-center">
                  <p className="text-brown-grey dark:text-text-dark-muted">
                    No jobs posted yet. Click "Add New Job" to create your first job posting.
                  </p>
                </div>
              ) : (
                jobs.map((job) => (
                  <div key={job.id} className="bg-white dark:bg-charcoal-light rounded-xl p-6 shadow-card">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-heading text-charcoal dark:text-sandstone mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 text-sm text-brown-grey dark:text-text-dark-muted">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">business</span>
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">location_on</span>
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-lg">schedule</span>
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditJob(job)}
                          className="p-2 text-charcoal dark:text-sandstone hover:bg-taupe/20 dark:hover:bg-charcoal rounded-lg transition-all duration-300"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-300"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </div>
                    <p className="text-brown-grey dark:text-text-dark-muted mb-3">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-brown-grey dark:text-text-dark-muted">
                      <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                      <span>GitHub Required: {job.includeGithub ? 'Yes' : 'No'}</span>
                      <span className="ml-auto">
                        Applications: {applications.filter(app => app.jobId === job.id).length}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Applications Tab */}
        {activeTab === 'applications' && (
          <div>
            <h2 className="text-2xl font-heading text-charcoal dark:text-sandstone mb-6">
              Job Applications
            </h2>

            {applications.length === 0 ? (
              <div className="bg-white dark:bg-charcoal-light rounded-xl p-8 text-center">
                <p className="text-brown-grey dark:text-text-dark-muted">
                  No applications received yet.
                </p>
              </div>
            ) : (
              <div className="grid gap-6">
                {applications.map((application) => {
                  const job = jobs.find(j => j.id === application.jobId);
                  return (
                    <div key={application.id} className="bg-white dark:bg-charcoal-light rounded-xl p-6 shadow-card">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-heading text-charcoal dark:text-sandstone mb-1">
                            {application.fullName}
                          </h3>
                          <p className="text-sm text-brown-grey dark:text-text-dark-muted mb-2">
                            Applied for: {job?.title || 'Position Deleted'}
                          </p>
                        </div>
                        <span className="text-xs text-brown-grey dark:text-text-dark-muted">
                          {new Date(application.appliedDate).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-xs text-brown-grey dark:text-text-dark-muted">Email:</span>
                          <p className="text-charcoal dark:text-sandstone">{application.email}</p>
                        </div>
                        <div>
                          <span className="text-xs text-brown-grey dark:text-text-dark-muted">Phone:</span>
                          <p className="text-charcoal dark:text-sandstone">{application.phone}</p>
                        </div>
                        <div>
                          <span className="text-xs text-brown-grey dark:text-text-dark-muted">Experience:</span>
                          <p className="text-charcoal dark:text-sandstone">{application.experience} years</p>
                        </div>
                        <div>
                          <span className="text-xs text-brown-grey dark:text-text-dark-muted">Degree:</span>
                          <p className="text-charcoal dark:text-sandstone">{application.degree}</p>
                        </div>
                        {application.linkedin && (
                          <div>
                            <span className="text-xs text-brown-grey dark:text-text-dark-muted">LinkedIn:</span>
                            <a 
                              href={application.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-charcoal dark:text-sandstone hover:underline break-all"
                            >
                              {application.linkedin}
                            </a>
                          </div>
                        )}
                        {application.github && (
                          <div>
                            <span className="text-xs text-brown-grey dark:text-text-dark-muted">GitHub:</span>
                            <a 
                              href={application.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-charcoal dark:text-sandstone hover:underline break-all"
                            >
                              {application.github}
                            </a>
                          </div>
                        )}
                      </div>

                      {application.resumeURL && (
                        <div className="mt-4 pt-4 border-t border-taupe dark:border-charcoal">
                          <a
                            href={application.resumeURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-charcoal dark:bg-sandstone text-white dark:text-charcoal text-sm uppercase tracking-widest font-bold px-6 py-3 hover:opacity-90 transition-all duration-300"
                          >
                            <span className="material-symbols-outlined">description</span>
                            View Resume/CV
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
