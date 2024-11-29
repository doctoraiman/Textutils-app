          import React from 'react'

          const About = () => {
            return (
              <>
              <div className=' min-h-screen'>
                  <h1 className='text-2xl font-bold text-center pt-2 text-purple-600'>About Us</h1>
                  <div className="collapse collapse-arrow bg-purple-200 border-[1px] border-purple-600">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">Accordion # 1</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-purple-200 border-[1px] border-purple-600">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Accordion # 2</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-purple-200 border-[1px] border-purple-600">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Accordion # 3</div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
              </div>
              </>
            )
          }

export default About

