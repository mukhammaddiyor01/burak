import Errors, { HttpCode, Message } from "../libs/Errors";
import { Member } from "../libs/types/member";
import { Product, ProductInput } from "../libs/types/product";
import ProductModel from "../schema/Product.model";

class ProductService {
    private readonly productModel;
    memberModel: any;

    constructor() {
        this.productModel = ProductModel;
    }

    /** SPA */

    /** SSR */


    public async createNewProduct(input: ProductInput): Promise<Product> {
         try {
            const product = await this.productModel.create(input); 
            // return await this.productModel.ceate(input); edi ishlamadi
            return product.toObject() as Product;
        } catch (err) {
            console.error("Error, model:createNewPeoduct:", err)
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);   // ozimiz creatre qilgan errrorni korsatib bermoqdamiz
        }
    }

}

export default ProductService;