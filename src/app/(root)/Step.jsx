import { Fragment } from "react";

const StepByStep = () => {
  return (
    <Fragment>
      <section id="how_it_works" className="bg-black text-white sectionSize">
        <div>
          <h2 className="secondaryTitle bg-underline2 bg-100%">How it works</h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              1
            </div>
            <h3 className="font-montserrat font-medium text-xl mb-2">
              Create Account
            </h3>
            <p className="text-center font-montserrat">
              sebelum melakukan pendaftaran baptis dan mengisi formulir
              pendaftaran, jemaat terlebih dahulu harus membuat akun baru yang
              nantinya terdaftar di sistem pendaftaran baptis online.
            </p>
          </div>
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              2
            </div>
            <h3 className="font-montserrat font-medium text-xl mb-2">
              Register Baptis
            </h3>
            <p className="text-center font-montserrat">
              pada tahap ini jemaat yang sudah memiliki akun pendaftaran baptis
              dapat langsung melakukan pengisian formulir pendaftaran dengan
              data yang sebenar-benarnya.
            </p>
          </div>
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              3
            </div>
            <h3 className="font-montserrat font-medium text-xl mb-2">
              Waiting
            </h3>
            <p className="text-center font-montserrat">
              Tahap terakhir jemaat hanya perlu menunggu konfirmasi dari admin
              bahwa permohonan baptis diterima atau ditolak.
            </p>
          </div>
        </div>
      </section>

      <section className="sectionSize items-start pt-8 md:pt-36 bg-black text-white">
        <div>
          <h2 className="secondaryTitle bg-highlight3 p-10 mb-0 bg-center bg-100%">
            FAQ
          </h2>
        </div>

        <div className="w-full py-4">
          <div className="flex justify-between items-center">
            <div className="font-montserrat font-medium mr-auto">
              Kapan baptisan akan dilaksanakan?
            </div>
            <img
              src="dist/assets/logos/CaretRight.svg"
              alt=""
              className="transform transition-transform"
            />
          </div>
        </div>
        <hr className="w-full bg-white" />

        <div className="w-full py-4">
          <div className="flex justify-between items-center">
            <div className="font-montserrat font-medium mr-auto">
              Bagaimana cara mendaftar baptis online?
            </div>
            <img
              src="dist/assets/logos/CaretRight.svg"
              alt=""
              className="transform transition-transform"
            />
          </div>
        </div>
        <hr className="w-full bg-white" />

        <div className="w-full py-4">
          <div className="flex justify-between items-center">
            <div className="font-montserrat font-medium mr-auto">
              Am I awesome?
            </div>
            <img
              src="dist/assets/logos/CaretRight.svg"
              alt=""
              className="transform transition-transform"
            />
          </div>
          <div className="font-montserrat text-sm font-extralight pb-8 hidden">
            Siapa saja yang dapat mendaftar baptis online?
          </div>
        </div>
        <hr className="w-full bg-white" />
      </section>
    </Fragment>
  );
};

export default StepByStep;
