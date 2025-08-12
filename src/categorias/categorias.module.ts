import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categorias } from "./entities/categorias.entity";
import { CategoriasController } from "./controllers/categorias.controller";
import { CategoriasService } from "./services/categoria.service";

@Module({
  imports: [TypeOrmModule.forFeature([Categorias])],
  controllers: [CategoriasController],
  providers: [CategoriasService],
  exports: [CategoriasService],
})
export class CategoriasModule {}