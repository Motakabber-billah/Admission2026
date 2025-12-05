import HT from '../../assets/default-photo.jpg';
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div>
                <div className='flex items-center justify-center mt-5'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={HT} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-base text-center ">প্রধান শিক্ষক</h2>
                            <h2 className="text-base text-center">মোঃ মমিনুল হক</h2>
                            <h2 className="text-base text-center">মোবাইলঃ 01717524674</h2>
                            <h2 className="text-base text-center">ইমেইলঃ hbuphs127819@gmail.com</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl text-center mb-5 mt-5'>GOOGLE MAP</h2>
                    <div className='mb-5'>
                        <div style={{ width: '100%', height: 0, paddingBottom: '56.25%', position: 'relative' }}>
                            <iframe
                                title="Hazi Boyen Uddin Public High School - Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.731492442206!2d89.3068385!3d25.413797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcdbc892f876dd%3A0x31900a7df3be644a!2sHazi%20Boyen%20Uddin%20Public%20High%20School!5e0!3m2!1sen!2sbd!4v1764895148450!5m2!1sen!2sbd"
                                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact