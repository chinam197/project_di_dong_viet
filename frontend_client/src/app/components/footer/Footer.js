import Image from "next/image";
import { fa0 } from "@fortawesome/free-solid-svg-icons";
import footerStyle from "./style/footer.style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="px-2 text-[15px]">
      <p>Liên hệ{" (Miễn phí cuộc gọi) "}</p>
      <hr />
      <div className="flex justify-around">
        <div>
          <div>
            <p>Mua ngay:</p>
            <span>1800.6018</span>
            <span>{"(7:30 - 21:30)"}</span>
          </div>
          <div>
            <p>Bảo hành:</p>
            <span>1800.6729</span>
            <span>{"(9:00 - 21:00)"}</span>
          </div>
        </div>
        <div>
          <div>
            <p>Góp ý:</p>
            <span>1800.6306</span>
            <span>{"(8:30 - 21:30)"}</span>
          </div>
          <div>
            <p>Kỹ thuật:</p>
            <span>1800.6018</span>
            <span>{"(8:30 - 21:30)"}</span>
          </div>
        </div>
      </div>
      <hr />
      <a href="#">Hệ thống cửa hàng Di Động Việt</a>
      <hr />

      <a href="#">Tra cứu điểm tích lũy</a>
      <hr />
      <p>Thông tin khác</p>
      <hr />
      <div>
        <p>Đối tác Di Động Việt</p>
        <ul className="flex gap-2 justify-center">
          <li>
            <Image
              src="https://didongviet.vn/svg/statics/vertu.svg"
              width={90}
              height={27}
              alt="vertu"
            />
          </li>

          <li>
            <Image
              src="https://didongviet.vn/svg/statics/vdd.svg"
              width={90}
              height={27}
              alt="static"
            />
          </li>

          <li>
            <Image
              src="https://didongviet.vn/svg/statics/techmag-10.svg"
              width={90}
              height={27}
              alt="statics"
            />
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <p>Kết nối với di đọng việt</p>
        <ul className="flex justify-between">
          <li className="flex gap-1">
            <div>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6U26YaxFrSPPluhWFHR9YFr_uQe4BdJxN9Q4NQEQE_3D_nzH1yFwHv-vLTioNjknJBA&usqp=CAU"
                width={20}
                height={20}
                alt="image"
              />
            </div>

            <span>524k fans</span>
          </li>
          <li className="flex gap-1">
            <div>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6U26YaxFrSPPluhWFHR9YFr_uQe4BdJxN9Q4NQEQE_3D_nzH1yFwHv-vLTioNjknJBA&usqp=CAU"
                width={20}
                height={20}
                alt="image"
              />
            </div>

            <span>Zalo DDV</span>
          </li>
          <li className="flex gap-1">
            <div>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6U26YaxFrSPPluhWFHR9YFr_uQe4BdJxN9Q4NQEQE_3D_nzH1yFwHv-vLTioNjknJBA&usqp=CAU"
                width={20}
                height={20}
                alt="image"
              />
            </div>

            <span>161k đăng ký</span>
          </li>
          <li className="flex gap-1">
            <div>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh6U26YaxFrSPPluhWFHR9YFr_uQe4BdJxN9Q4NQEQE_3D_nzH1yFwHv-vLTioNjknJBA&usqp=CAU"
                width={20}
                height={20}
                alt="image"
              />
            </div>

            <span>92k theo dõi</span>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <p
          className="w-full text-center text-12 text-black"
          style={{ color: "rgb(102, 102, 102)" }}
        >
          ®2013 - 2023 CÔNG TY TNHH CÔNG NGHỆ DI ĐỘNG VIỆT <br />
          75/35 Nguyễn Cửu Vân, Phường 17, Quận Bình Thạnh, TP Hồ Chí Minh.{" "}
          <br />
          GPĐKKD: 0312193244, cấp tại Sở KH &amp; ĐT TP.HCM <br />
          Chủ sở hữu: Nguyễn Ngọc Đạt - Điện thoại: 1800.6018 <br />
          Email: lienhe@didongviet.vn - Bản quyền thuộc về Di Động Việt.
        </p>
      </div>
      <hr />
      <div>
        <ul className=" flex justyfly-center justify-center gap-2">
          <li>
            <Image
              src="https://didongviet.vn/images/footer/cert.png"
              width={50}
              height={23}
              alt="img"
            />
          </li>
          <li>
            <Image
              src="https://didongviet.vn/images/footer/dmca.png"
              width={50}
              height={23}
              alt="img"
            />
          </li>
          <li>
            <Image
              src="https://didongviet.vn/images/footer/cong-thuong.png"
              width={50}
              height={23}
              alt="img"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
