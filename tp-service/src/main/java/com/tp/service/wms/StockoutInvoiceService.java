package com.tp.service.wms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tp.common.dao.BaseDao;
import com.tp.dao.wms.StockoutInvoiceDao;
import com.tp.model.wms.StockoutInvoice;
import com.tp.service.BaseService;
import com.tp.service.wms.IStockoutInvoiceService;

@Service
public class StockoutInvoiceService extends BaseService<StockoutInvoice> implements IStockoutInvoiceService {

	@Autowired
	private StockoutInvoiceDao stockoutInvoiceDao;
	
	@Override
	public BaseDao<StockoutInvoice> getDao() {
		return stockoutInvoiceDao;
	}

}
