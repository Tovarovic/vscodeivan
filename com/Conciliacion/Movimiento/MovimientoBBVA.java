package com.Conciliacion.Movimiento;

import java.math.BigDecimal;
import java.time.LocalDate;

public class MovimientoBBVA {
    
    private LocalDate fecha;
    private int numeroLote;
    private BigDecimal monto;
    
    public MovimientoBBVA(LocalDate fecha, int numeroLote, BigDecimal monto) {

        if (fecha == null) {
            throw new IllegalArgumentException("La fecha no puede ser nula");
        }

        if (numeroLote <= 0) {
            throw new IllegalArgumentException("El número de lote debe ser mayor que cero");
        }

        if (monto == null || monto.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("El monto no puede ser nulo o negativo");
        }

        this.fecha = fecha;
        this.numeroLote = numeroLote;
        this.monto = monto;
    }

    public LocalDate getFecha() { return fecha; }
    public int getNumeroLote() { return numeroLote; }
    public BigDecimal getMonto() { return monto; }

    @Override
    public String toString() {
        return "MovimientoBBVA{" +
                "fecha=" + fecha +
                ", lote='" + numeroLote + '\'' +
                ", monto=" + monto +
                '}';
    }
}
